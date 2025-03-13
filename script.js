function createSubjectInputs() {
    // Get the number of subjects and total marks
    const numSubjects = parseInt(document.getElementById('numSubjects').value);
    const totalMarks = parseFloat(document.getElementById('totalMarks').value);
  
    // Validate inputs
    if (isNaN(numSubjects) || numSubjects < 1) {
      alert("Please enter a valid number of subjects.");
      return;
    }
  
    if (isNaN(totalMarks) || totalMarks <= 0) {
      alert("Please enter valid total marks for all subjects.");
      return;
    }
  
    // Clear previous inputs
    const subjectInputs = document.getElementById('subjectInputs');
    subjectInputs.innerHTML = "";
  
    // Create input fields for obtained marks of each subject
    for (let i = 1; i <= numSubjects; i++) {
      const subjectDiv = document.createElement('div');
      subjectDiv.className = 'subject';
  
      const label = document.createElement('label');
      label.textContent = `Subject ${i} Obtained Marks:`;
      const input = document.createElement('input');
      input.type = 'number';
      input.id = `subject${i}Obtained`;
      input.placeholder = 'Enter obtained marks';
  
      subjectDiv.appendChild(label);
      subjectDiv.appendChild(input);
      subjectInputs.appendChild(subjectDiv);
    }
  
    // Show the Calculate Grade button
    document.getElementById('calculateBtn').style.display = 'block';
  }
  
  function calculateGrade() {
    const numSubjects = parseInt(document.getElementById('numSubjects').value);
    const totalMarks = parseFloat(document.getElementById('totalMarks').value);
    let totalObtained = 0;
  
    // Validate total marks
    if (isNaN(totalMarks) || totalMarks <= 0) {
      alert("Please enter valid total marks for all subjects.");
      return;
    }
  
    // Calculate total obtained marks
    for (let i = 1; i <= numSubjects; i++) {
      const obtained = parseFloat(document.getElementById(`subject${i}Obtained`).value) || 0;
      if (obtained < 0) {
        alert(`Error: Obtained marks cannot be negative for Subject ${i}.`);
        return;
      }
      totalObtained += obtained;
    }
  
    // Validate if obtained marks exceed total marks
    if (totalObtained > totalMarks) {
      alert("Error: Total obtained marks cannot exceed total marks.");
      return;
    }
  
    // Calculate percentage
    const percentage = ((totalObtained / totalMarks) * 100).toFixed(2);
  
    // Determine grade
    let grade;
    if (percentage >= 90) {
      grade = 'A+';
    } else if (percentage >= 80) {
      grade = 'A';
    } else if (percentage >= 70) {
      grade = 'B';
    } else if (percentage >= 60) {
      grade = 'C';
    } else if (percentage >= 50) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    // Display results
    document.getElementById('totalObtained').textContent = totalObtained;
    document.getElementById('percentage').textContent = percentage;
    document.getElementById('grade').textContent = grade;
  }