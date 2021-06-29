import { CustomValidators } from './../../validators/customValidators/custom-validators';
import { MemberService } from './../../services/member/member.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  form: FormGroup;

  dci: FormControl;
  name: FormControl;
  firstname: FormControl;
  email: FormControl;
  login: FormControl;

  constructor(private formBuilder: FormBuilder, private memberService: MemberService) { }

  ngOnInit(): void {

    this.dci = new FormControl(null, [
      Validators.required
    ]);

    this.name = new FormControl(null, [
      Validators.required
    ]);

    this.firstname = new FormControl(null, [
      Validators.required
    ]);

    this.login = new FormControl(null, [
      Validators.required
    ]);

    this.email = new FormControl(null, [
      Validators.required,
      CustomValidators.email()
    ]);

    this.form = this.formBuilder.group({
      dci: this.dci,
      name: this.name,
      firstName: this.firstname,
      email: this.email,
      login: this.login
    });
  }

  public controlEmail(): string {
    if (this.email.touched) {
      if (this.email.getError('required')) {
        return `L'adresse email est obligatoire`;
      }
      if (this.email.getError('error_email')) {
        return `L'adresse email n'est pas valide`;
      }
    }
    return null;
  }

  public controlDci(): string {
    if (this.dci.touched) {
      if (this.dci.getError('required')) {
        return 'Le numéro DCI est obligatoire';
      }
      return null;
    }
  }

  public controlName(): string {
    if (this.name.touched) {
      if (this.name.getError('required')) {
        return 'Le nom est obligatoire';
      }
      return null;
    }
  }

  public controlFirstname(): string {
    if (this.firstname.touched) {
      if (this.firstname.getError('required')) {
        return 'Le prénom est obligatoire';
      }
      return null;
    }
  }

  public controlLogin(): string {
    if (this.login.touched) {
      if (this.login.getError('required')) {
        return 'Le login est obligatoire';
      }
      return null;
    }
  }

  createMember(memberData): void {

    for (const key in this.form.controls) {
      if (this.form.contains(key)) {
        this.form.get(key).markAsTouched();
        this.form.get(key).markAsDirty();
      }
    }

    if (this.form.valid) {
      memberData.totalPoints = 0;
      this.memberService.addMember(memberData).subscribe();
      this.form.reset();
    }
  }

}
