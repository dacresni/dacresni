<section>
  <h1>Projects</h1>
  <ol id='project-list'>
    <li v-for "repo in repos">
      <p class='name' > {{repo.name}} </p>
      <p class='description'> {{repo.description}} </p>
    </li>
  </ol>
</section>
