window.onload = function() {
    // Variables to track user responses and color type
    var cool = 0;
    var warm = 0;
    var vein = false; 
    var jewelry = false;
    var hair = false;
    var wear = false;
    var sun = false;
    var eye = false;


    // Helper function to save and retrieve state across pages
    function saveState() {
        localStorage.setItem('colorTypeState', JSON.stringify({
            cool: cool,
            warm: warm,
            vein: vein,
            jewelry: jewelry,
            hair: hair,
            wear: wear,
            sun: sun,
            eye: eye
        }));
    }

    // Helper function to load state
    function loadState() {
        const savedState = localStorage.getItem('colorTypeState');
        if (savedState) {
            const state = JSON.parse(savedState);
            cool = state.cool;
            warm = state.warm;
            vein = state.vein;
            jewelry = state.jewelry;
            hair = state.hair;
            wear = state.wear;
            sun = state.sun;
            eye = state.eye;
        }
    }

    // Load state when page loads
    loadState();

    // Navigation and state update functions for each page
    function setupPageNavigation() {
        // Index Page
        var takeTest = document.getElementById("take-test");
        if (takeTest) { 
            takeTest.onclick = function () {
                // Reset state when starting the test
                cool = 0;
                warm = 0;
                vein = false;
                jewelry = false;
                hair = false;
                wear = false;
                sun = false;
                eye = false;
                saveState();
                window.location = "./q1.html";
            };
        } 

        // Q1 Page
        var a1 = document.getElementById("a1");
        var a2 = document.getElementById("a2");
        var back1 = document.getElementById("back1");

        if (a1) { 
            a1.onclick = function () {
                vein = true;
                cool += 1;
                saveState();
                window.location = "./q2.html";
            };
        } 
        if (a2) { 
            a2.onclick = function () {
                warm += 1;
                saveState();
                window.location = "./q2.html";
            };
        }
        if (back1) { 
            back1.onclick = function () {
                window.location = "./index.html";
            };
        }

        // Q2 Page
        var b1 = document.getElementById("b1");
        var b2 = document.getElementById("b2");
        var b3 = document.getElementById("b3");
        var back2 = document.getElementById("back2");

        if (b1) { 
            b1.onclick = function () {
                jewelry = true;
                cool += 1;
                saveState();
                window.location = "./q3.html";
            };
        } 
        if (b2) { 
            b2.onclick = function () {
                warm += 1;
                saveState();
                window.location = "./q3.html";
            };
        }
        if (b3) { 
            b3.onclick = function () {
                // jewelry = null;
                saveState();
                window.location = "./q3.html";
            };
        } 
        if (back2) { 
            back2.onclick = function () {
                window.location = "./q1.html";
            };
        }

        // Q3 Page
        var c1 = document.getElementById("c1");
        var c2 = document.getElementById("c2");
        var back3 = document.getElementById("back3");

        if (c1) { 
            c1.onclick = function () {
                warm += 1;
                saveState();
                window.location = "./q4.html";
            };
        } 
        if (c2) { 
            c2.onclick = function () {
                hair = true;
                cool += 1;
                saveState();
                window.location = "./q4.html";
            };
        }
        if (back3) { 
            back3.onclick = function () {
                window.location = "./q2.html";
            };
        }

        // Q4 Page
        var d1 = document.getElementById("d1");
        var d2 = document.getElementById("d2");
        var d3 = document.getElementById("d3");
        var back4 = document.getElementById("back4");

        if (d1) { 
            d1.onclick = function () {
                wear = true;
                cool += 1;
                saveState();
                window.location = "./q5.html";
            };
        } 
        if (d2) { 
            d2.onclick = function () {
                warm += 1;
                saveState();
                window.location = "./q5.html";
            };
        }
        if (d3) { 
            d3.onclick = function () {
                // wear = null;
                saveState();
                window.location = "./q5.html";
            };
        } 
        if (back4) { 
            back4.onclick = function () {
                window.location = "./q3.html";
            };
        }

        // Q5 Page
        var e1 = document.getElementById("e1");
        var e2 = document.getElementById("e2");
        var e3 = document.getElementById("e3");
        var back5 = document.getElementById("back5");

        if (e1) { 
            e1.onclick = function () {
                sun = true;
                cool += 1;
                saveState();
                window.location = "./q6.html";
            };
        } 
        if (e2) { 
            e2.onclick = function () {
                warm += 1;
                saveState();
                window.location = "./q6.html";
            };
        }
        if (e3) { 
            e3.onclick = function () {
                // sun = null;
                saveState();
                window.location = "./q6.html";
            };
        } 
        if (back5) { 
            back5.onclick = function () {
                window.location = "./q4.html";
            };
        }

        // Q6 Page
        var f1 = document.getElementById("f1");
        var f2 = document.getElementById("f2");
        var back6 = document.getElementById("back6");

        if (f1) { 
            f1.onclick = function () {
                eye = true;
                saveState();
                window.location = "./wait.html";
            };
        } 
        if (f2) { 
            f2.onclick = function () {
                saveState();
                window.location = "./wait.html";
            };
        }
        if (back6) { 
            back6.onclick = function () {
                window.location = "./q5.html";
            };
        }

    // RESULT LOGIC
    //hair ===  false (black/dark); true (blonde/others)
    //eye === false (Blue/Green); true (Black / Deep color)

    // Cool Spring: cool > warm, hair === true, eye === false
    // Warm Spring: cool < warm, hair === true, eye === false
    // Cool Summer: cool > warm, hair === false, eye === false
    // Warm Summer: cool < warm, hair === false, eye === false
    // Cool Autumn: cool > warm, hair === true, eye === true
    // Warm Autumn: cool < warm, hair === true, eye === true
    // Cool Winter: cool > warm, hair === false, eye === true
    // Warm Winter: cool < warm, hair === false, eye === true

        // Palette Page
        var outfit = document.getElementById("outfit-ideas");
        var allColorTypes = document.querySelectorAll('.color-type h5');
        var allPalettes = document.querySelectorAll('.palette img');
        var allOutfits = document.querySelectorAll('.outfit img');

        function displayColorTypeAndPalette() {
            // Hide all color types and palettes initially
            if (allColorTypes && allPalettes) {
                allColorTypes.forEach(function (el) { el.style.display = 'none'; });
                allPalettes.forEach(function (el) { el.style.display = 'none'; });

                // Color Type Detection Logic
                if (cool > warm && hair === true && eye === false) {
                    document.getElementById('1_1').style.display = "block"; // Cool Spring
                    document.getElementById('1a').style.display = "block"; // Cool Spring Palette
                    // document.getElementById('1ao').style.display = "block"; // Cool Spring Palette
                    localStorage.setItem('selectedColorType', '1_1');
                } else if (cool < warm && hair === true && eye === false) {
                    document.getElementById('1_2').style.display = "block"; // Warm Spring
                    document.getElementById('1b').style.display = "block"; // Warm Spring Palette
                    // document.getElementById('1bo').style.display = "block"; // Warm Spring Palette
                    localStorage.setItem('selectedColorType', '1_2');
                } else if (cool > warm && hair === false && eye === false) {
                    document.getElementById('2_1').style.display = "block"; // Cool Summer
                    document.getElementById('2a').style.display = "block"; // Cool Summer Palette
                    // document.getElementById('2ao').style.display = "block"; // Cool Summer Palette
                    localStorage.setItem('selectedColorType', '2_1');
                } else if (cool < warm && hair === false && eye === false) {
                    document.getElementById('2_2').style.display = "block"; // Warm Summer
                    document.getElementById('2b').style.display = "block"; // Warm Summer Palette
                    // document.getElementById('2bo').style.display = "block"; // Warm Summer Palette
                    localStorage.setItem('selectedColorType', '2_2');
                } else if (cool > warm && hair === true && eye === true) {
                    document.getElementById('3_1').style.display = "block"; // Cool Autumn
                    document.getElementById('3a').style.display = "block"; // Cool Autumn Palette
                    // document.getElementById('3ao').style.display = "block"; // Cool Autumn Palette
                    localStorage.setItem('selectedColorType', '3_1');
                } else if (cool < warm && hair === true && eye === true) {
                    document.getElementById('3_2').style.display = "block"; // Warm Autumn
                    document.getElementById('3b').style.display = "block"; // Warm Autumn Palette
                    // document.getElementById('3bo').style.display = "block"; // Warm Autumn Palette
                    localStorage.setItem('selectedColorType', '3_2');
                } else if (cool > warm && hair === false && eye === true) {
                    document.getElementById('4_1').style.display = "block"; // Cool Winter
                    document.getElementById('4a').style.display = "block"; // Cool Winter Palette
                    // document.getElementById('4ao').style.display = "block"; // Cool Winter Palette
                    localStorage.setItem('selectedColorType', '4_1');
                } else if (cool < warm && hair === false && eye === true) {
                    document.getElementById('4_2').style.display = "block"; // Warm Winter
                    document.getElementById('4b').style.display = "block"; // Warm Winter Palette
                    // document.getElementById('4bo').style.display = "block"; // Warm Winter Palette
                    localStorage.setItem('selectedColorType', '4_2');
                }
            }
        }

        function displayOutfit() {
            // Hide all color types and palettes initially
            if (allColorTypes && allOutfits) {
                allColorTypes.forEach(function (el) { el.style.display = 'none'; });
                allOutfits.forEach(function (el) { el.style.display = 'none'; });

                // Color Type Detection Logic
                if (cool > warm && hair === true && eye === false) {
                    document.getElementById('1_1').style.display = "block"; // Cool Spring
                    document.getElementById('1ao').style.display = "block"; // Cool Spring Palette
                    localStorage.setItem('selectedColorType', '1_1');
                } else if (cool < warm && hair === true && eye === false) {
                    document.getElementById('1_2').style.display = "block"; // Warm Spring
                    document.getElementById('1bo').style.display = "block"; // Warm Spring Palette
                    localStorage.setItem('selectedColorType', '1_2');
                } else if (cool > warm && hair === false && eye === false) {
                    document.getElementById('2_1').style.display = "block"; // Cool Summer
                    document.getElementById('2ao').style.display = "block"; // Cool Summer Palette
                    localStorage.setItem('selectedColorType', '2_1');
                } else if (cool < warm && hair === false && eye === false) {
                    document.getElementById('2_2').style.display = "block"; // Warm Summer
                    document.getElementById('2bo').style.display = "block"; // Warm Summer Palette
                    localStorage.setItem('selectedColorType', '2_2');
                } else if (cool > warm && hair === true && eye === true) {
                    document.getElementById('3_1').style.display = "block"; // Cool Autumn
                    document.getElementById('3ao').style.display = "block"; // Cool Autumn Palette
                    localStorage.setItem('selectedColorType', '3_1');
                } else if (cool < warm && hair === true && eye === true) {
                    document.getElementById('3_2').style.display = "block"; // Warm Autumn
                    document.getElementById('3bo').style.display = "block"; // Warm Autumn Palette
                    localStorage.setItem('selectedColorType', '3_2');
                } else if (cool > warm && hair === false && eye === true) {
                    document.getElementById('4_1').style.display = "block"; // Cool Winter
                    document.getElementById('4ao').style.display = "block"; // Cool Winter Palette
                    localStorage.setItem('selectedColorType', '4_1');
                } else if (cool < warm && hair === false && eye === true) {
                    document.getElementById('4_2').style.display = "block"; // Warm Winter
                    document.getElementById('4bo').style.display = "block"; // Warm Winter Palette
                    localStorage.setItem('selectedColorType', '4_2');
                }
            }
        }

        // Call this function to display the correct color type and palette on palette page
        if (window.location.pathname.includes('palette.html')) {
            displayColorTypeAndPalette();
        }

        // Outfit button logic
        if (outfit) { 
            outfit.onclick = function () {
                window.location = "./outfit.html";
            };
        }

        // Call display outfit on outfit page
        if (window.location.pathname.includes('outfit.html')) {
            displayOutfit();
        }

        // Outfit page exit logic
        var exit = document.getElementById("exit");
        if (exit) { 
            exit.onclick = function () {
                localStorage.removeItem('selectedColorType');
                window.location = "./index.html";
            };
        }
    }

    // Setup navigation for all pages
    setupPageNavigation();
};