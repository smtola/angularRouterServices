import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="section-header">
      <div class="container-header">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>

    <section class="section-body">
      <div class="container-item">
        <form >

          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name..">

          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name..">

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

          <input type="submit" value="Submit">

        </form>
      </div>
    </section>
  `,
  styles: [`
    .section-header{
      display: grid;
      align-items: center;
      padding: 1.5rem 1.5rem 0;
      width: 100%;
    }
    .container-header{
      border-radius: 4px;
      padding:1rem;
      font-size: 1.5rem;
    }
    .container-header>h1{
      text-align: center;
    }
    .container-header>p{
      text-align: center;
      font-size: 15px;
    }
    div+h1{
      text-align: center;
      margin-top: 2rem;
    }
    .container-item{
      border-radius: 4px;
      width: 100%;
      background-color: transparent;
      backdrop-filter: blur(50px);
      box-shadow: 0 4px 5px 0 #a6a6a6;
      padding:10px;
    }
    .section-body{
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 10px;
      transition: all 0.5s ease;
    }
    /* Style inputs with type="text", select elements and textareas */
    input[type=text], select, textarea {
      width: 100%; /* Full width */
      padding: 12px; /* Some padding */
      border: 1px solid #ccc; /* Gray border */
      border-radius: 4px; /* Rounded borders */
      box-sizing: border-box; /* Make sure that padding and width stays in place */
      margin-top: 6px; /* Add a top margin */
      margin-bottom: 16px; /* Bottom margin */
      resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
    }

    input[type=submit] {
      background-color: #04AA6D;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type=submit]:hover {
      background-color: #45a049;
    }


  `]
})
export class ContactComponent {

}
