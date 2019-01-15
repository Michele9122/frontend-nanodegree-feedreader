/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


       

        it('URL are defined and not empty', function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

       
        it('name are defined and not empty', function(){
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        })
    });

    describe('The Menu', function() {
  

        it('menu is hidden', function(){
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        })

       
        it('menu on and off', function(){
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
        })
    });
  

    describe('Initial Entries', function(){
      
         beforeEach(function(done) {
             loadFeed(0, done);
         })

         it('work completed', function() {
             const feed = document.querySelector('.feed');
             expect(feed.children.length > 0).toBe(true);
         });
    });
  
    describe('New Feed Selection', function(){
        const currentFeed = document.querySelector('.feed');
        const afterFeed = [];

        beforeEach(function(done) {
            loadFeed(0);
            Array.from(feed.children).forEach(function(entry){
                afterFeed.push(entry.innerText);
            });
            loadFeed(1,done);
        });


        it('feed are loaded', function(){
            Array.from(feed.children).forEach(function(entry, index){ 
            expect(entry.innerText === afterFeed[index]).toBe(false);
            });
        });

    });
         

   
}());
