function filteredRoles([persons], role1 = "Teacher"){
  // Code the function here.
  if (role1 === "Teacher") {
    return "Teacher";
  }
  else {
    return "Student";
  }

}

// Do not remove lines below, it is for tests
module.exports = filteredRoles;
