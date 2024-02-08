import { Component } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {
  profileForm = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [""],
    address: this.fb.group({
      street: [""],
      city: [""],
      state: [""],
      zip: [""]
    }),
    aliases: this.fb.array([
      this.fb.control("")
    ])
  })

  get aliases() {
    return this.profileForm.get("aliases") as FormArray
  }

  onSubmit() {

  }

  addAlias() {
    this.aliases.push(this.fb.control(""))
  }

  constructor(private fb: FormBuilder) {}
}
