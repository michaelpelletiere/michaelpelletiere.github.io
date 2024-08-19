<!DOCTYPE html>
<html lang="en">


<head> <!--where you add charater sets, Web title, and Links to CSS, Favicon
        and really anything you want loaded first. (top of the page stuff)-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="https://michaelpelletiere.github.io/"> <!-- Link to your CSS file -->
 
   
<style>/*where you add CSS not added into your styles.css. Way to get instant 
        test of CSS script without having to wait for the repository to update*/
        .rotate-clockwise:hover {
                 transform: scale(1.05) rotate(20deg); /* Slightly zooms in the image */
                 box-shadow: 0px 0px 15px 7px gray; /* Increases shadow */
                transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
        }
   
         .rotate-counterclockwise:hover {
                transform: scale(1.05) rotate(-20deg); /* Slightly zooms in the image */
                 box-shadow: 0px 0px 15px 7px gray; /* Increases shadow */
                transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */

        }



</style>
</head>

<body> <!--Goes all the way to the bottom of the page and holds everything-->

    <!-- Navigation Menu -->


    

    
 <nav class="sidebar">
 
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a> 
            <a href="#Resume">Resume Preview & Download</a>
            <a href="#contact">Contact</a>

 </nav>


 <nav class="mobile-nav center-text">
 
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#Resume">Resume Preview & Download</a></li>
        <li><a href="#contact">Contact</a></li>
</ul>


</nav>









    <main class="content">
        <section id="home">
         <!--My name at the top, and the two pictures showcased at the begining-->
        
        <h1 style="font-size: 3em; text-align: center; font-weight: bolder; color: rgba(118, 186, 241, 0.7); text-decoration: underline overline; ">Michael T. Pelletiere</h1>
    
    <div class="responsive-image banner ">
        <img src="https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2203/7097952/2000w_q95.jpg" 
        alt="Syverson's kit and EOD badge show case"
       class="styled-image rotate-clockwise" 
        >
    
        <img src="https://richardesyverson.github.io/richardesyverson-richardesyverson.github.io/images/Snapchat-1840980622.JPEG" 
        alt="Syverson's kit and EOD badge show case"
        class="styled-image rotate-counterclockwise" 
        >
    </div>
     

    


    
        <div class=center-text >
            
            <h1>Welcome to My Portfolio</h1>
        <p>This is a simple website to showcase my projects and skills.</p>
    </div>
    </section>



    <section id="about" class="center-text container text-banner">
        
        <h2>About Me</h2>
            <p>I am a .......
</p>
                <p>jjsjsjs
                </p>
                <p>sssss</p>
</p>
    </section>



    <section id="projects" class="center-text" >
        
        <h2>Projects</h2>
        <p>The weather checker below and this websites are currently my only projects. This showcases my skills in HTML, CSS, and intergrating APIs. </p>
        <p> I hope in the near future to showcase some additional experience in AI and APIs by adding a GPT that can answer all of you questions about me and my work history.</p>
    


        <div id="weather-app" >
            <h2>Weather App</h2>
            <div class="weather-app">
                <input type="text" id="city-input" placeholder="Enter city">
                <button id="get-weather">Get Weather</button>
            </div>
            <div id="weather-info" class="weather-info">
                <!-- Weather information will be displayed here -->
            </div>
            Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
            <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></a>

</div>
    </section>


   



    <section id="Resume" class="center-text" style="min-height: 100vh;">
        
        <h2> Resume Preview & Download</h2>
        <a href="https://richardesyverson.github.io/richardesyverson-richardesyverson.github.io/PDFs/3. Richard_Syverson_Resume Current .pdf" download>Download My Resume</a>
        <!--This is where the two images of my resume is showcased--> 
<div style="margin-top: 100px;" class="center-image styled-imageresume:hover ">
        <img src="https://richardesyverson.github.io/richardesyverson-richardesyverson.github.io/images/resume 1.png" 
        alt="Resume preview"
        class="styled-imageresume responsive-image"
        >
        <img src="https://richardesyverson.github.io/richardesyverson-richardesyverson.github.io/images/resume 2.png" 
        alt="Resume preview"
        class="styled-imageresume responsive-image" 
        >
    </div>
    </section>

   

    <section id="contact" class="center-text">
        <h2>Contact</h2>
        <p> <a href="https://www.linkedin.com/in/michaelpelletiere/"> My linkedin</a> | Email : michael.pelletiere@outlook.com</p>
    </section>

    
 

    <!-- Footer(contains copyright) -->
    <footer>
        <div class="center-text">
        <p>&copy; 2024 My Portfolio</p>
    </div>
    </footer>


</main>

    <!-- JavaScript File Link (at bottom because generally you want it loaded last) -->
    <script src="https://github.com/michaelpelletiere/michaelpelletiere.github.io/edit/main/index.md"></script>   <!-- Link to your JavaScript file -->























    
</body>
</html>
