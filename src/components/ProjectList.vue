
<template>
<section>
  <h3> Projects</h3>
  <dl id='project-list'>
    <entry v-for="repo  in list" :key=repo.name > 
        <dt :key='name'  > {{name}} </dt>
        <dd :key='description'> {{description}} </dd>
    </entry>
  </dl>
</section>
</template>
