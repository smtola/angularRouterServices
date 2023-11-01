import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="section-header" id="home">
      <div class="container-header">
        <h1>Learn software <br> Courses online for free</h1>
      </div>
      <h1>Popular Courses</h1>
    </section>

    <section class="section-body">
      <div class="container-item">
        <div class="header-flex">
          <div class="container-img">
            <h3>Advance angular<br> courses 2022 <br>step by step</h3>
            <img src="./assets/img/angular.png" alt="angular" width="85" height="85">
          </div>

          <div class="title">
            <h1>Advance Angular Courses</h1>
            <p>In this courses you will<br> learn all the concept of <br>angular framework.</p>
          </div>
        </div>

        <div class="type">
          <span>Premium</span>
          <span>Price : $145.5</span>
        </div>

        <div class="cont-btn">
          <button>Buy Now</button>
          <button>Show Details</button>
        </div>
      </div>

      <div class="container-item">
        <div class="header-flex">
          <div class="container-img">
            <h3>Advance angular<br> courses 2022 <br>step by step</h3>
            <img src="./assets/img/angular.png" alt="angular" width="85" height="85">
          </div>

          <div class="title">
            <h1>Advance Angular Courses</h1>
            <p>In this courses you will<br> learn all the concept of <br>angular framework.</p>
          </div>
        </div>

        <div class="type">
          <span>Premium</span>
          <span>Price : $145.5</span>
        </div>

        <div class="cont-btn">
          <button>Buy Now</button>
          <button>Show Details</button>
        </div>
      </div>

      <div class="container-item">
        <div class="header-flex">
          <div class="container-img">
            <h3>Advance angular<br> courses 2022 <br>step by step</h3>
            <img src="./assets/img/angular.png" alt="angular" width="85" height="85">
          </div>

          <div class="title">
            <h1>Advance Angular Courses</h1>
            <p>In this courses you will<br> learn all the concept of <br>angular framework.</p>
          </div>
        </div>

        <div class="type">
          <span>Premium</span>
          <span>Price : $145.5</span>
        </div>

        <div class="cont-btn">
          <button>Buy Now</button>
          <button>Show Details</button>
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
          background-color:#a6a6a6;
        }
        .container-header>h1{
          color:#eee;
          text-align: center;
        }
        div+h1{
          text-align: center;
          margin-top: 2rem;
          border-bottom: 4px solid grey;
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
          background: linear-gradient(to bottom right, #a6a6a6 0%, #ffffff 100%);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding:1rem;
          gap:10px;
          border-radius: 4px;
        }
        .container-img>h3{
          text-align: center;
          font-size: 14px;
        }
        .title{
          text-align: center;
          margin: 13px auto;
          display: block;
        }
        .title>h1{
          font-size: 1rem;
        }
        .title>p{
          margin:10px 0;
        }
        .type{
          display: flex;
          flex-wrap: wrap;
          gap:30px;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          margin:10px 0;
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
          background-color: #cccccc ;
          font-weight: bold;
          width: 110px;
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
          .container-img>img{
            width: 65px;
            height: 65px;
          }
          .title>h1{
            font-size: 13px;
          }
          .title>p{
            font-size: 12px;
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
            background-color: #cccccc ;
            font-weight: bold;
            width: 95px;
            padding: 5px;
            font-size: 12px;
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
            width: 65px;
            height: 65px;
          }
          .title>h1{
            font-size: 13px;
          }
          .title>p{
            font-size: 12px;
          }
          .type{
            font-size: 15px;
            gap:30px;
          }
          .cont-btn{
            display: flex;
            flex-wrap: wrap;
            gap: 35px;
            justify-content: center;
            align-items: center;
            margin: 10px 0;
          }
          .cont-btn>button{
            background-color: #cccccc ;
            font-weight: bold;
            width: 120px;
            padding: 5px;
            font-size: 12px;
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
export class HomeComponent {

}
