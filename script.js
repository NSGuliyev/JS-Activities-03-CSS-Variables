const inputs = document.querySelectorAll("input");KeyboardEvent

function handleUpdates () {
    // console.log(this.value)
    const suffix = this.dataset.sizing || '';
    // console.log(this.name)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); 

    // console.log(suffix)
}

// inputs.forEach(input => input.addEventListener('change', handleUpdates));

inputs.forEach(function(input){
    input.addEventListener('change', handleUpdates)
});


// inputs.forEach(input => input.addEventListener('mousemove', handleUpdates));

inputs.forEach(function (input){
    input.addEventListener('mousemove', handleUpdates)
});

