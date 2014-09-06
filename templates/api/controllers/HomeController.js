/**
 * Created by mmarino on 9/5/2014.
 */
/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function(req, res) {

        var navItems = [
            {url: '/about', cssClass: 'fa fa-comments', title: 'About'}


        ];

        res.view({
            title: 'Home',
            navItems: navItems,
            currentUser: req.user,
            locales: sails.config.i18n.locales,
            layout: 'layout'

        });
    }
};