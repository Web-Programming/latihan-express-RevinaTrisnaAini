  registerForm: FormGroup;
  formError: String ="";
  
  //Inject class Router dan service authentication  

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get name() {
    return this.registerForm.get('name');
  }
  
  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  submitRegister(): void {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      console.log('Form submitted', formData);
      //Panggil method submitRegister()
    } else {
      this.formError = 'All fields are required, please try again';
      //console.log('Form is not valid');
    }
  }