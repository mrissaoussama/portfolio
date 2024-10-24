import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const buttons = this.renderer.selectRootElement('.show-button', true);
    this.renderer.listen(buttons, 'click', (event) => {
      const button = event.target as HTMLElement;
      const projectDiv = button.closest('.project');
      if (!projectDiv) return;

      const projectNumber = projectDiv.getAttribute('data-project-number');
      const projectTitle = projectDiv.getAttribute('data-project-title');
      const terminalWindow = projectDiv.querySelector('.terminal-window');
      if (!terminalWindow) return;
      const terminalText = terminalWindow.querySelector('.terminal-text');
      const projectContent = projectDiv.querySelector('.project-content');
      const title = projectDiv.querySelector('h3');

      if (projectDiv) this.renderer.setStyle(projectDiv, 'display', 'none');
      if (title) this.renderer.setStyle(title, 'display', 'none');
      if (terminalWindow) this.renderer.setStyle(terminalWindow, 'display', 'block');

      const terminalLines = [
        'running project ID ' + projectNumber + ' - ' + projectTitle,
        'Loading modules',
        'Initializing',
        'Authenticating',
        'Displaying Project Details',
      ];

      function typeLine(lines: string[], index: number, callback: () => void) {
        if (index < lines.length) {
          const line = lines[index];
          let charIndex = 0;
          const typingInterval = setInterval(() => {
            if (charIndex < line.length) {
              if (terminalText) {
                terminalText.textContent += line.charAt(charIndex);
              }
              charIndex++;
            } else {
              clearInterval(typingInterval);
              if (terminalText) {
                terminalText.textContent += '\n';
              }
              setTimeout(() => {
                typeLine(lines, index + 1, callback);
              }, 500);
            }
          }, 50);
        } else {
          callback();
        }
      }

      typeLine(terminalLines, 0, () => {
        if (terminalWindow) this.renderer.setStyle(terminalWindow, 'display', 'none');
        if (projectContent) this.renderer.setStyle(projectContent, 'display', 'block');
      });
    });
  }
}
