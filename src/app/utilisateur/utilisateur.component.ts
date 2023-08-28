import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilisateurService } from '../utilisateur.service';
import { User } from '../user';
import * as $ from 'jquery';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {
  utilisateurs: User[] = [];
  newUser: User = new User(); // Initialize a new User object for adding

  @ViewChild('addModal') addModal!: ElementRef;
  @ViewChild('editModal') editModal!: ElementRef;
  @ViewChild('deleteModal') deleteModal!: ElementRef;

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getUtilisateurs();
  }

  getUtilisateurs(): void {
    this.utilisateurService.getUtilisateurs().subscribe(utilisateurs => {
      this.utilisateurs = utilisateurs;
    });
  }

  openAddModal() {
    this.newUser = new User(); // Clear the newUser object
    //$(this.addModal.nativeElement).modal('show');
  }

  addUser() {
    this.utilisateurService.addUser(this.newUser).subscribe(response => {
      // Assuming your service returns the updated user list
      this.utilisateurs = response;
      //$(this.addModal.nativeElement).modal('hide');
    });
  }

  openEditModal(utilisateur: User) {
    // You can implement the logic to populate the edit modal here
    // $(this.editModal.nativeElement).modal('show');
  }

  openDeleteModal(utilisateur: User) {
    // You can implement the logic to populate the delete modal here
    // $(this.deleteModal.nativeElement).modal('show');
  }

  deleteUser(utilisateur: User) {
    this.utilisateurService.deleteUser(utilisateur.idutilisateur).subscribe(response => {
      // Assuming your service returns the updated user list
      this.utilisateurs = response;
    });
  }
}
