<template>
  <h3>Resource Output</h3>  
  <pre>
      {{ toon }}
      {{ resources }}
  </pre>
  
  
  <table class="w-full">
      <tr>
          <th>Golds</th>
          <th>Anvils</th>
          <th>Dynamites</th>
          <th>Boosters</th>
          <th>Regional Mat.</th>
          <th>Special Mat.</th>
          <th>Secret Stuff</th>
          <th>Formulars</th>
          <th>Atoms</th>          
      </tr>
      
      <tr>
          <th>
              
          </th>
      </tr>
  </table>
</template>


<script>
export default {
    name : 'ResourceOutput' ,
    props : {
        'toon' : {
            default: null 
        }, 
        'resources' :[] , 
        'empty_symbol' : {
            default : '&nbsp;'
        }
    } , 
    mounted() {
        console.log( this.toon )
        console.log( this.resources )
    }
}
</script>