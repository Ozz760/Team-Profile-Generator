const EngineerTemp = (engineer) => 
  engineer.map (item => {
      return`<div class="card-body">
      <h5 class="card-title">${item.getName()}</h5>
      <h5>${item.getRole()}</h5>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
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