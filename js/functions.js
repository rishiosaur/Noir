var html = {
  input: document.getElementById('input'),
  input: function(event) {
    var x = event.keyCode;
    var p = document.getElementById('cmd');
    var br = document.createElement('br');
    var text = document.createTextNode(input.value);
    if(x === 13){
      p.appendChild(text);
      p.appendChild(br);
    }
  },
  button: function(name, action){
    //stuff goes here
  }
};
