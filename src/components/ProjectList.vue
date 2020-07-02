<section>
  <h1>Projects</h1>
  <dl id='project-list'>
    <template v-for="repo in repos">
      <dt> {{repo.name}} </dt>
      <dd> {{repo.description}} </dd>
    </template>
  </dl>
</section>
