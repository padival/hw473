var std = document.getElementById("stdTemplate").innerHTML;
var cr = document.getElementById("stdTemplate2").innerHTML;

var template = Handlebars.compile(std);
var template2 = Handlebars.compile(cr);

var data = getData();

var output;
var output2;


function search() {
  var name = document.getElementById("formInput").value;
  var result = { students: [] };
  for (var i = 0, len = data.students.length; i < len; i++) {
    if (data.students[i].lname === name) {
      result.students.push(
        data.students[i].fname + " " + data.students[i].lname
      );
    }
  }
  output = template(result);
  document.getElementById("list").innerHTML = output;


}



function init(event) {
  event.preventDefault();
var aTags = document.getElementsByTagName("a");
var course = { courses: [] };
var gpa={gpas:[]};
 var name = $(event.target).text();
    for (var i = 0, len = data.students.length; i < len; i++) {
  if (data.students[i].fname + " " + data.students[i].lname === name) {
          for (var j = 0, len = this.data.students[i].course.length; j < len; j++){
    			  course.courses.push({'course':data.students[i].course[j],'gpa':data.students[i].gpa[j]});
    		}
        }
      }
      output2 = template2(course);
      document.getElementById("tbl").innerHTML = output2;
    }

    jQuery('#formInput').keyup(function() {
		var caps = jQuery('#formInput').val();
		caps = caps.charAt(0).toUpperCase() + caps.slice(1);
        jQuery('#formInput').val(caps);
	});
