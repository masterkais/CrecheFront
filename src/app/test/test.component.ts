import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  selectedFile!: File;
  imageUrl!: string;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage() {
    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.http.post<any>('http://your-api-url/upload', formData).subscribe(
      (response) => {
        this.imageUrl = response.imageUrl;
      },
      (error) => {
        console.error('Erreur lors du téléchargement de l\'image :', error);
      }
    );
  }
}
