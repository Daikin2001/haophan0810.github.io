
function modify(_this) {
  console.log('this :', _this);
  console.log('this.text() :', $(_this).html());
}

$(function () {
  let getThis;
  let languages = [
    {
      className: "javascript",
      name: 'JavaScript'
    },
    {
      className: "css",
      name: 'CSS'
    },
    {
      className: "html",
      name: 'HTML'
    },
    {
      className: "cs",
      name: 'C#'
    },
    {
      className: "java",
      name: 'Java'
    },
    {
      className: "json",
      name: 'JSON'
    },
    {
      className: "markdown",
      name: 'Markdown'
    },
    {
      className: "php",
      name: 'PHP'
    },
  ];

  // $.FroalaEditor.DEFAULTS.initOnClick=true;
  $.FroalaEditor.DefineIcon('insert', { NAME: 'file-code' });
  $.FroalaEditor.RegisterCommand('insert', {
    title: 'Code Snipet',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: function () {
      getThis = this;
      $('#input-code').val("");
      $("#highlight-popup").css("display", "block");
      console.log(getThis);
      
    }
  });


  $('textarea#froala-content').froalaEditor({
    // Add the custom buttons in the toolbarButtons list, after the separator.
    toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'help', 'html', '|', 'undo', 'redo', 'insert']

  })
  //insert language to select
  for (let item of languages) {
    $('#list-language').append(`<option value="${item.className}">${item.name}</option>`)
  }

  // handle event when click submit
  $('.submit').click(function () {
    // get class name of languages
    let lang = $('#list-language').val();
    // get text input
    let codeInput = $('#input-code').val();
    if (codeInput != '') {
      codeInput = codeInput.replace(/'&'/g, '&amp;')
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/&/g,'&amp;');
        
      console.log('codeInput :', codeInput);
      // move to text-container

      $(".text-container").html(`<pre class='${lang} hljs js-insert-text'><code>${codeInput} </code></pre>`);
      
      // highlight code of div container
      $('pre code').each(function (i, block) {
        console.log(i);
        hljs.highlightBlock(block);
      });
      
      // set attribute : not edit text
      $('pre.js-insert-text').attr("contenteditable", "false");

      // get html code highlighted
      var getTextHighlighted = $(".text-container").html();
      // getTextHighlighted.replace(/"<br>"/g,'\n');
      console.log('getTextHighlighted :', getTextHighlighted);

      getThis.html.insert(`${getTextHighlighted}<p></p>`);
      // getThis.html.insert("<pre><code>" + getTextHighlighted + "</code></pre>");
      // console.log(codeInput);
      // console.log($('#input-code'));

      // add function modify
      $('.js-insert-text').attr('onclick','modify(this)');

      //close popup
      $("#highlight-popup").css("display", "none");

    } else {
      alert('Không nhập code rỗng');
    }


  })


  // click close

  $('.cancel,.close-icon').click(function(){
    $('#highlight-popup').css("display","none");


  })
});
