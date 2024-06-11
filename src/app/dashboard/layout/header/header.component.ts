import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private elementRef: ElementRef){}

  scrollToProjects() {
    const navbarHeight = 80; 
    const projectsElement = this.elementRef.nativeElement.ownerDocument.getElementById('projects');
    if (projectsElement) {
      const yOffset = projectsElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }

  scrollToAbout(){
    const navbarHeight = 80; 
    const aboutElement = this.elementRef.nativeElement.ownerDocument.getElementById('about');
    if (aboutElement) {
      const yOffset = aboutElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }

  scrollToContact(){
    const navbarHeight = 80; 
    const contactElement = this.elementRef.nativeElement.ownerDocument.getElementById('contact');
    if (contactElement) {
      const yOffset = contactElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }

  scrollToExpe() {
    const navbarHeight = 80; 
    const expeElement = this.elementRef.nativeElement.ownerDocument.getElementById('expe');
    if (expeElement) {
      const yOffset = expeElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
    }
}
