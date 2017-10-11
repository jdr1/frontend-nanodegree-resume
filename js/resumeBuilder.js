/*
This is empty on purpose! Your code to build the resume will go here.
 */


 var formattedHeaderName = HTMLheaderName.replace("%data%", "Jayendra Rathod");
 var formattedHeaderRole = HTMLheaderRole.replace("%data%", "Team Lead Tools Programmer");

 $("#header").prepend(formattedHeaderRole);
 $("#header").prepend(formattedHeaderName);
 