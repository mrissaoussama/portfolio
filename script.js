document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var formMessage = document.getElementById('form-message');
  formMessage.textContent = 'Thank you for your message!';
  this.reset();
});

document.querySelectorAll('.show-button').forEach(function(button) {
  button.addEventListener('click', function() {
      var projectDiv = this.closest('.project');
      var projectNumber = projectDiv.getAttribute('data-project-number');
      var projectTitle = projectDiv.getAttribute('data-project-title');
      var terminalWindow = projectDiv.querySelector('.terminal-window');
      var terminalText = terminalWindow.querySelector('.terminal-text');
      var projectContent = projectDiv.querySelector('.project-content');
      var title = projectDiv.querySelector('h3');

      this.style.display = 'none';
      title.style.display = 'none';

      terminalWindow.style.display = 'block';

      var terminalLines = [
          'running project ID ' + projectNumber + ' - ' + projectTitle,
          'Loading modules',
          'Initializing',
          'Authenticating',
          'Displaying Project Details',
      ];

      function typeLine(lines, index, callback) {
          if (index < lines.length) {
              var line = lines[index];
              var charIndex = 0;
              var typingInterval = setInterval(function() {
                  if (charIndex < line.length) {
                      terminalText.textContent += line.charAt(charIndex);
                      charIndex++;
                  } else {
                      clearInterval(typingInterval);
                      terminalText.textContent += '\n';
                      setTimeout(function() {
                          typeLine(lines, index + 1, callback);
                      }, 500);
                  }
              }, 5);
          } else {
              callback();
          }
      }

      typeLine(terminalLines, 0, function() {
          terminalWindow.style.display = 'none';
          projectContent.style.display = 'block';
      });
  });
});

var themeToggle = document.getElementById('theme-toggle');
var body = document.body;
var themeLabel = document.getElementById('theme-label');

themeToggle.addEventListener('change', function() {
  if (this.checked) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      themeLabel.textContent = 'Dark Mode';
  } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      themeLabel.textContent = 'Light Mode';
  }
});
