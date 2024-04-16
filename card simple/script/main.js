$(document).ready(function () {
    const iconPath = "images/icons/";
    const wrapper = $('main');
   
    rocketData.forEach(rocket => {

        let bgColor;
        switch (rocket.group_letter) {
            case 'A':
                bgColor = 'rgb(11, 0, 40)'; 
                break;
            case 'B':
                bgColor = 'rgb(83, 30, 97)'; 
                break;
            case 'C':
                bgColor = 'rgb(15, 0, 60)'; 
                break;
            case 'D':
                bgColor = 'rgb(60, 25, 80)'; 
                break;
            case 'E':
                bgColor = 'rgb(43, 15, 51)'; 
                break;
            case 'F':
                bgColor = 'rgb(49, 0, 94)'; 
                break;
            case 'G':
                bgColor = 'rgb(38, 0, 94)'; 
                break;
            case 'H':
                bgColor = 'rgb(37, 18, 64)'; 
                break;   
        }

        const card =
        $(`<div class="card">
        <div class="card-content">
            <div class="card-number center-content" style="background-color: ${bgColor};"> ${rocket.group_letter}${rocket.number}</div>
            <div class="card-title">
               <div class="card-name">${rocket.name}</div> 
               <div class="card-group">${rocket.group}</div>
            </div>
            <div class="rocket-image center-content">
            <img src="images/${rocket.name}.jpg" alt="${rocket.name}">
        </div>
            <div class="goal-icon center-content" style="background-color: ${bgColor};">Mission goal</div>
            <div class="rocket-info">${rocket.mission_goal}</div>

            <div class="stat-icon center-content"><img src="${iconPath}development.png" alt="development"></div>
            <div class="stat-value center-content">${rocket.year_built}</div>

            <div class="stat-icon center-content"><img src="${iconPath}deadline.png" alt="deadline"></div>
            <div class="stat-value center-content">${rocket.mission_duration}</div>

            <div class="stat-icon center-content"><img src="${iconPath}speed-test.png" alt="speed-test"></div>
            <div class="stat-value center-content">${rocket.max_speed}</div>

            <div class="stat-icon center-content"><img src="${iconPath}dimensions.png" alt="dimensions"></div>
            <div class="stat-value center-content">${rocket.max_earth_distance}</div>

            <div class="stat-icon center-content"><img src="${iconPath}money.png" alt="money"></div>
            <div class="stat-value center-content">${rocket.development_cost}</div>

            <div class="stat-icon center-content"><img src="${iconPath}weight.png" alt="weight"></div>
            <div class="stat-value center-content">${rocket.weight}</div>
         </div>

         <div class="card-back"><img src="images/card-back.jpg" alt="card back">
     </div>
    </div>`);
        wrapper.append(card);

    });

    $('.card').on('click', function () {
        // Toggle the 'card-rotate' class
        $(this).toggleClass('card-rotate');
    });
});       