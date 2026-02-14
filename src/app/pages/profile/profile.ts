import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})

export class Profile implements OnInit {

  profileForm!: FormGroup;
  selectedImage: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) { }


  ngOnInit(): void {
    this.profileForm = this.fb.group({
      username: [''],
      firstName: [''],
      lastName: [''],
      email: ['']
    });

    this.loadUser();
  }

  loadUser() {
    this.profileService.getUser().subscribe(user => {
      this.profileForm.patchValue(user);
    });
  }

  save() {
    this.profileService.updateUser(this.profileForm.value)
      .subscribe(() => {
        alert('Perfil atualizado com sucesso!');
      });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImage = reader.result;
    };
    reader.readAsDataURL(file);

    this.profileService.uploadPhoto(file).subscribe();
  }

  changePassword() {
    const clientId = 'deckmasterai-client';
    const redirectUri = encodeURIComponent('http://localhost:4200/profile');

    window.location.href =
      `http://localhost:8080/realms/masterdeckai-realm/protocol/openid-connect/auth` +
      `?client_id=${clientId}` +
      `&redirect_uri=${redirectUri}` +
      `&response_type=code` +
      `&scope=openid` +
      `&kc_action=UPDATE_PASSWORD`;
  }

}

