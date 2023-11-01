import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
        <div class="container">
          <div class="navbar">
            <ul>
              <li><a [routerLinkActive]="'active'" [routerLinkActiveOptions]="{exact:true}" [routerLink]="'home'">Home</a></li>
              <li><a [routerLinkActive]="'active'" [routerLink]="'about'">About</a></li>
              <li><a [routerLinkActive]="'active'" [routerLink]="'contact'">Contact</a></li>
              <li><a [routerLinkActive]="'active'" [routerLink]="'courses'">Courses</a></li>
            </ul>
          </div>
        </div>
  `,
  styles: [`
        .container{
          width: 100%;
          height: auto;
          position: sticky;
          z-index: 1;
          top:0;
        }
        .navbar{
          background-color: #4d79ff;
          padding: 2rem 12px;
          border-bottom: 3px solid #ff5050;
          transition: all 0.5s ease;
          z-index: 1;
        }
        ul{
          transition: all 0.5s ease;
        }
        ul>li{
          display: inline-block;
          font-size: 1.5rem;
          text-transform: uppercase;
          transition: all 0.5s ease;
          margin: 0 1rem;
        }
        li>a{
          list-style-type: none;
          text-decoration: none;
          color:#eee;
          text-align: center;
        }
        li>a:hover{
          opacity: 0.7;
        }
        @media screen and (max-width: 658px){
          .navbar{
            background-color: #4d79ff;
            padding:1rem;
            border-bottom: 3px solid #ff5050;
          }
          ul{
            display: flex;
            justify-content: center;
            align-items: center;
          }
          ul>li{
            display: inline-block;
            font-size: 1rem;
            margin: 0 10px;
            text-transform: uppercase;
          }
        }

  `]
})
export class HeaderComponent {

}
