import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="section-header">
      <div class="container-header">
        <h1>About Us Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br> sed do eiusmod tempor incididunt ut labore <br>et dolore magna aliqua.</p>
      </div>
      <h1>Our Team</h1>
    </section>

    <section class="section-body">
      <div class="container-item">
        <div class="header-flex">
          <div class="container-img">
            <img src="./assets/img/avatar/boy-1.jpg" alt="angular" width="100%" height="150">
          </div>

          <div class="title">
            <h1>Name</h1>
            <h1 style="color:#a6a6a6">Position</h1>
            <p>In this courses you will <br> learn all the concept of
            <p>abc@example.com</p>
          </div>
        </div>

        <div class="cont-btn">
          <button>Contact</button>
        </div>
      </div>

      <div class="container-item">
        <div class="header-flex">
          <div class="container-img">
            <img src="./assets/img/avatar/boy-1.jpg" alt="angular" width="100%" height="150">
          </div>

          <div class="title">
            <h1>Name</h1>
            <h1 style="color:#a6a6a6">Position</h1>
            <p>In this courses you will <br> learn all the concept of
            <p>abc@example.com</p>
          </div>
        </div>

        <div class="cont-btn">
          <button>Contact</button>
        </div>
      </div>

      <div class="container-item">
        <div class="header-flex">
          <div class="container-img">
            <img src="./assets/img/avatar/boy-1.jpg" alt="angular" width="100%" height="150">
          </div>

          <div class="title">
            <h1>Name</h1>
            <h1 style="color:#a6a6a6">Position</h1>
            <p>In this courses you will <br> learn all the concept of
            <p>abc@example.com</p>
          </div>
        </div>

        <div class="cont-btn">
          <button>Contact</button>
        </div>
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
    .section-body{
      display: grid;
      justify-content: center;
      align-items: center;
      grid-template-columns: repeat(auto-fit,minmax(100px,300px));
      gap: 20px;
      padding: 10px;
      transition: all 0.5s ease;
    }
    .container-item{
      border-radius: 4px;
      width: 100%;
      background-color: transparent;
      backdrop-filter: blur(50px);
      box-shadow: 0 4px 5px 0 #a6a6a6;
      padding:10px;
    }
    .container-img{
      justify-content: center;
      align-items: center;
    }
    container-img>img{
     border-radius: 4px;
    }
    .title{
      margin: 13px auto;
      display: block;
    }
    .title>h1{
      font-size: 1rem;
    }
    .title>p{
      margin-top:10px;
      font-size: 13px;
    }
    .cont-btn{
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
    }
    .cont-btn>button{
      background-color: black ;
      color:#eee;
      font-weight: bold;
      width: 100%;
      padding: 5px;
      font-size: 14px;
      outline: none;
      border-radius: 4px;
      border:none;
      box-shadow: 0 3px 5px 0 grey;
      cursor: pointer;
      transition: all 0.5s ease;
    }
    .cont-btn>button:hover{
      opacity: 0.7;
    }
    @media screen and (max-width: 658px) {
      .section-body{
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(2,minmax(100px,300px));
        gap: 20px;
        padding: 10px;
        transition: all 0.5s ease;
      }
      .container-header{
        border-radius: 4px;
        padding:1rem;
        font-size: 1rem;
        background-color:#a6a6a6;
      }
      div+h1 {
        text-align: center;
        margin-top: 1rem;
        font-size: 17px;
        border-bottom: 4px solid grey;
      }
      .container-img>h3{
        text-align: center;
        font-size: 12px;
      }
      container-img>img{
        border-radius: 4px;
      }
      .title>h1{
        font-size: 13px;
      }
      .type{
        font-size: 13px;
        gap:10px;
      }
      .cont-btn{
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
        align-items: center;
        margin: 10px 0;
      }
      .cont-btn>button{
        background-color: black ;
        color:#eee;
        font-weight: bold;
        width: 100%;
        padding: 5px;
        font-size: 14px;
        outline: none;
        border-radius: 4px;
        border:none;
        box-shadow: 0 3px 5px 0 grey;
        cursor: pointer;
        transition: all 0.5s ease;
      }
    }
    @media screen and (max-width: 568px) {
      .section-body{
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-columns: repeat(1,minmax(100px,400px));
        gap: 20px;
        padding: 10px;
        transition: all 0.5s ease;
      }
      .header-flex{
        display: flex;
        gap:15px;
        transition: all 0.5s ease;
      }
      .container-header{
        border-radius: 4px;
        padding:1rem;
        font-size: 1rem;
        background-color:#a6a6a6;
      }
      div+h1 {
        text-align: center;
        margin-top: 1rem;
        font-size: 17px;
        border-bottom: 4px solid grey;
      }
      .container-img>h3{
        text-align: center;
        font-size: 12px;
      }
      .container-img>img{
        width: 170px;
      }
      .title>h1{
        font-size: 1rem;
      }
      .title>p{
        font-size: 12px;
        color:grey;
      }
      .type{
        font-size: 15px;
        gap:30px;
      }
      .cont-btn{
        justify-content: center;
        align-items: center;
        margin: 10px 0;
      }
      .cont-btn>button{
        background-color: black ;
        color:#eee;
        font-weight: bold;
        width: 100%;
        padding: 5px;
        font-size: 14px;
        outline: none;
        border-radius: 4px;
        border:none;
        box-shadow: 0 3px 5px 0 grey;
        cursor: pointer;
        transition: all 0.5s ease;
      }
    }
  `]
})
export class AboutComponent {

}
