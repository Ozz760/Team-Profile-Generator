const EngineerTemp = (engineer) => 
  engineer.map (item => {
      return`<div class="card-body">
      <h5 class="card-title">${item.getName()}</h5>
      <h5>${item.getRole()}</h5>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
      <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
      </svg> 
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${item.getId()}</li>
      <li class="list-group-item"><a href="mailto:${item.getEmail()}">Email:${item.getEmail()} </a></li>
      <li class="list-group-item">GitHub:<a href="https://github.com/${item.getGithub()} "target="_blank> ${item.getGithub()}</a></li>
    </ul>
  </div>`
})

  module.exports = EngineerTemp; 