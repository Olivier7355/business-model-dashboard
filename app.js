var zIndex = 1;
let dataList =[];
let theId =0;

function getAmountValue(event) {  
  const qw = document.getElementById("amount-structure").value;
  console.log(qw,theId);
  const source = document.getElementById(theId);
  //console.log(source);
  //source.style.background ='blue';
  var option = document.createElement('h2');
  source.appendChild(option).innerHTML = qw;
  //source.appendChild(option).style.background = 'white';
  source.appendChild(option).style.textAlign = 'right';
  source.appendChild(option).setAttribute('id', theId+'-'+qw);
  const modalSegments = document.querySelector('.modal-segments');
  modalSegments.classList.add('hidden-segments');
  
  

}

(function(window, document) {
  window.addEventListener('load', loaded, false);

  function loaded() {
    window.removeEventListener('load', loaded, false);
    main();
  }

  function main() {
    var createButton = document.querySelector('.add-note');
    var createReport = document.querySelector('.report');
    var closeReport = document.querySelector('.close-modal');
    var closeStructure = document.querySelector('.close-structure');
    var closeButtons = document.querySelectorAll('.close');
    var minimizeButtons = document.querySelectorAll('.minimize');


    closeStructure.addEventListener('click', close_structure, false);
    closeReport.addEventListener('click', close_report, false);
    createReport.addEventListener('click', create_report, false);
    
    createButton.addEventListener('click', create, false);
    for (var i = 0; i < minimizeButtons.length; i++) {
      minimizeButtons[i].addEventListener('click', minimize, false);
    }

    for (i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener('click', close, false);
    }

    document.body.addEventListener('dragover', drag_over, false);
    document.body.addEventListener('drop', drop, false);
  }

  function create_report(event) {
    const modal = document.querySelector('.modal');
    // const overlay = document.querySelector('.overlay');
    modal.classList.remove('hidden-report');
    // overlay.classList.remove('hidden-report');

  }
  function close_report(event) {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    modal.classList.add('hidden-report');
    overlay.classList.add('hidden-report');

  }
  function close_structure(event) {
    document.querySelector('.modal-structure').classList.add('hidden-report');
  }



  function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
      (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY));
    event.dataTransfer.setData("target", event.target.id);
    
  }

  function drag_over(event) {
    event.preventDefault();
    //console.log(event.clientX, event.clientY);
   
    return false;
  }

  function drop(event) {
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var j = document.getElementById(event.dataTransfer.getData("target"));
    const modalStructure = document.querySelector('.modal-structure');
    const modalSegments = document.querySelector('.modal-segments');
    j.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    j.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    j.style.background = 'yellow';
    //var block = j.innerText.slice(j.innerText.indexOf("#b")+2,j.innerText.length);
    theId = j.getAttribute('id');
    
    // Drop the sticker in PARTNERS block
    const rectPartners = document.querySelector('.PARTNERS').getBoundingClientRect();
    if (event.clientX >= rectPartners.left && event.clientX <= rectPartners.right &&
      event.clientY >= rectPartners.top && event.clientY <= rectPartners.bottom) {
        dataList[theId-1][2] = 'KEY PARTNERS';
        console.log('dataList :', dataList)
      }
    // Drop the sticker in ACTIVITIES block
    const rectActivities = document.querySelector('.ACTIVITIES').getBoundingClientRect();
    if (event.clientX >= rectActivities.left && event.clientX <= rectActivities.right &&
      event.clientY >= rectActivities.top && event.clientY <= rectActivities.bottom) {
        dataList[theId-1][2] = 'KEY ACTIVITIES';
        console.log('dataList :', dataList)
      }
    // Drop the sticker in RESOURCES block
    const rectResources = document.querySelector('.RESOURCES').getBoundingClientRect();
    if (event.clientX >= rectResources.left && event.clientX <= rectResources.right &&
      event.clientY >= rectResources.top && event.clientY <= rectResources.bottom) {
        dataList[theId-1][2] = 'KEY RESOURCES';
        console.log('dataList :', dataList)
      }
    // Drop the sticker in PROPOSITION block
    const rectProposition = document.querySelector('.PROPOSITION').getBoundingClientRect();
    if (event.clientX >= rectProposition.left && event.clientX <= rectProposition.right &&
      event.clientY >= rectProposition.top && event.clientY <= rectProposition.bottom) {
        dataList[theId-1][2] = 'VALUE PROPOSITION';
        console.log('dataList :', dataList)
      }
    // Drop the sticker in RELATIONSHIPS block
    const rectRelationship = document.querySelector('.RELATIONSHIPS').getBoundingClientRect();
    if (event.clientX >= rectRelationship.left && event.clientX <= rectRelationship.right &&
      event.clientY >= rectRelationship.top && event.clientY <= rectRelationship.bottom) {
        dataList[theId-1][2] = 'CUSTOMER RELATIONSHIPS';
        console.log('dataList :', dataList)
      }
    // Drop the sticker in CHANNELS block
    const rectChannels = document.querySelector('.CHANNELS').getBoundingClientRect();
    if (event.clientX >= rectChannels.left && event.clientX <= rectChannels.right &&
      event.clientY >= rectChannels.top && event.clientY <= rectChannels.bottom) {
        dataList[theId-1][2] = 'CHANNELS';
        console.log('dataList :', dataList)
      }
    // Drop the sticker in SEGMENTS block
    const rectSegments = document.querySelector('.SEGMENTS').getBoundingClientRect();
    if (event.clientX >= rectSegments.left && event.clientX <= rectSegments.right &&
      event.clientY >= rectSegments.top && event.clientY <= rectSegments.bottom) {
        dataList[theId-1][2] = 'CUSTOMER SEGMENTS';
        modalSegments.classList.remove('hidden-segments');
        console.log('dataList :', dataList)
      }
    // Drop the sticker in REVENUE block
    const rectRevenue = document.querySelector('.REVENUE').getBoundingClientRect();
    if (event.clientX >= rectRevenue.left && event.clientX <= rectRevenue.right &&
      event.clientY >= rectRevenue.top && event.clientY <= rectRevenue.bottom) {
        dataList[theId-1][2] = 'REVENUE STREAMS';
        console.log('dataList :', dataList)
      }

    // Drop the sticker in STRUCTURE block
    const rect = document.querySelector('.STRUCTURE').getBoundingClientRect();
    if (event.clientX >= rect.left && event.clientX <= rect.right &&
      event.clientY >= rect.top && event.clientY <= rect.bottom) {
      j.style.background = 'lightblue';
      dataList[theId-1][2] = 'COST STRUCTURE';
      //console.log('id :', theId);
      //console.log('text :', j.innerText);
      // sort list : https://riptutorial.com/javascript/example/3443/sorting-multidimensional-array
      // start browser hot load : vite dev --host

      // sort by block type
      let tempDataList = dataList.slice();  
      tempDataList.sort(function(a, b) { if (a[2] === b[2]) {
              return 0;
          }
          else {
              return (a[1] < b[1]) ? -1 : 1;
          }})
      console.log('sorted list :', tempDataList);

      for (var n=0; n<tempDataList.length; n++) {
        var cardType = document.getElementById('card_type');
        var option = document.createElement('option');
        cardType.appendChild(option).setAttribute('value', tempDataList[n][0]); // The value is the sticker number
        cardType.appendChild(option).innerHTML = tempDataList[n][2]+' : '+tempDataList[n][1];
      }

      modalStructure.classList.remove('hidden-structure');
      
      console.log('dataList :', dataList)
    }
  
    
    return false;
  }


  function close(event) {
    event.stopPropagation();
    var note = this.parentNode.parentNode;
    var theId = note.getAttribute('id');
    dataList[theId-1][2] = 'DELETED';
    console.log('dataList :', dataList);
    note.classList.toggle('closed');
    var wrapper = document.querySelector('.wrapper');
    
    setTimeout(function() {
      wrapper.removeChild(note);
      note = null;
    }, 100);
  }

  function minimize(event) {
    event.stopPropagation();
    var text = this.parentNode.parentNode.querySelector('.text');
    text.classList.toggle('minimized');
  }

  function move(event) {
    event.preventDefault();
    console.log(event.target);
    event.target.style.left = event.clientX;
    event.target.style.top = event.clientY;
    console.log('dragged', event.clientX, event.clientY);
  }

  function create(event) {
    event.preventDefault();
    var parent = document.querySelector('.add-sticker');
    var textarea = parent.querySelector('textarea');
    var addButton = parent.querySelector('button');

    parent.classList.toggle('hidden');

    addButton.addEventListener('click', addnote, false);

    function addnote() {
      Handlebars.registerHelper('breakLine', function(text) {
        return text.replace(/\n/, '<br/>');
      });

      var source = document.getElementById('entry-template').innerHTML;
      var template = Handlebars.compile(source);
      var text = document.querySelector('textarea').value;
      //var block = '#bnull';
      var context = {
        text: text,
        //block: block,
      };
      dataList.push([zIndex,text,null]);
      console.log('dataList :', dataList);
      

      var note = document.createElement('div');
      note.classList.add('note');
      note.setAttribute('draggable', 'true');
      note.setAttribute('id', zIndex);
      note.innerHTML = template(context);
      note.style['z-index'] = zIndex;

      zIndex += 1;

      var wrapper = document.querySelector('.wrapper');
      var newNote = wrapper.appendChild(note);
      var closeButton = newNote.querySelector('.close');
      var minimizeButton = newNote.querySelector('.minimize');
      var mainBar = newNote.querySelector('.mainbar');

      newNote.addEventListener('dragstart', drag_start, false);
      parent.classList.toggle('hidden');
      document.querySelector('textarea').value = '';
      
      minimizeButton.addEventListener('click', minimize, false);
      closeButton.addEventListener('click', close, false);
      addButton.removeEventListener('click', addnote, false);
    }
  }
})(window, document);