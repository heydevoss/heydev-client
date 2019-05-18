<template>
  <div class="box-backdrop">
    <div class="box">
      <header class="box-header">
        <slot name="header">
          <!--{{repository.name}} -->
          Client
        </slot>
      </header>

      <section class="box-description">
        <slot name="description">
            <!-- {{repository.description}} -->
            UNDER CONSTR Uddd fffdd ddddd dddd d dd  ddC  T ION 
        </slot>
       </section>

       <section class="box-languages">
        <slot name="languages">
            <!--   
            {{repoditory.languange}}
            -->
            Javascript | Vue | HTML
        </slot>
       </section>

       <footer class="box-footer">
          <slot name="footer">
              <img width= "20px" height= "20px" src="..\..\static\fork.png" />  5 <pre>  </pre>
              <img width= "18px" height= "18px" src="..\..\static\star.png" /> 10
        </slot>
      </footer>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Repository',
    props: ['repository']
  };
</script>

<style>
  .box-backdrop {
    display: flex;
    width: 300px;
    height: 215px;
  }
  .box {
    overflow-x: hidden;
    overflow-y: hidden;
    background: #FFFFFF;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }
  .box-header,
  .box-footer {
    padding: 15px;
    display: flex;
  }
  .box-header {
    border-bottom: 1px solid #eeeeee;
    color: rgb(0, 0, 0);
  }
  .box-footer {
    border-top: 1px solid #eeeeee;
    justify-content: center;
  }
  .box-description {
    position: relative;
    padding: 20px 10px;
    color: #4AAE9B;
    justify-content: right;
  }
  .box-languages {
    position: relative;
    justify-content: center;
    height: 30px;
    color: rgb(58, 107, 109);
    justify-content: center;
    background-color: rgb(210, 245, 245);
  }
</style>