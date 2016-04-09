define(function(require) {
    var Hogan = require('hogan/lib/hogan');
    var templates = {};
    templates['dashboard'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"dashboard\" class=\"panel panel-default bootcards-summary\">");t.b("\n");t.b("\n" + i);t.b("  <div class=\"panel-heading\">");t.b("\n" + i);t.b("    <h3 class=\"panel-title\">Summary Card Heading</h3>");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"panel-body\">");t.b("\n" + i);t.b("    <div class=\"row\">");t.b("\n" + i);t.b("      <div class=\"col-xs-6 col-sm-4\">");t.b("\n" + i);t.b("        <a class=\"bootcards-summary-item\" href=\"/contacts\">");t.b("\n" + i);t.b("          <i class=\"fa fa-3x fa-users\"></i>");t.b("\n" + i);t.b("          <h1>40 <span>Contacts</span></h1>");t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"col-xs-6 col-sm-4\">");t.b("\n" + i);t.b("        <a class=\"bootcards-summary-item\" href=\"/companies\">");t.b("\n" + i);t.b("          <i class=\"fa fa-3x fa-building-o\"></i>");t.b("\n" + i);t.b("          <h1>20 <span>Companies</span></h1>");t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("      <div class=\"col-xs-6 col-sm-4\">");t.b("\n" + i);t.b("        <a class=\"bootcards-summary-item\" href=\"/notes\">");t.b("\n" + i);t.b("          <i class=\"fa fa-3x fa-clipboard\"></i>");t.b("\n" + i);t.b("          <h1>187 <span>Notes</span></h1>");t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("  </div>");t.b("\n");t.b("\n" + i);t.b("  <div class=\"panel-footer\">");t.b("\n" + i);t.b("    <small class=\"pull-left\">Summary Card Footer</small>");t.b("\n" + i);t.b("  </div>  ");t.b("\n");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
    templates['footer'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<!-- fixed tabbed footer -->");t.b("\n" + i);t.b("  <div id=\"footer\" class=\"navbar navbar-default navbar-fixed-bottom\">");t.b("\n");t.b("\n" + i);t.b("    <div class=\"container\">");t.b("\n");t.b("\n" + i);t.b("      <div class=\"bootcards-desktop-footer clearfix\">");t.b("\n" + i);t.b("        <p class=\"pull-left\">Cobos</p>");t.b("\n" + i);t.b("      </div>");t.b("\n");t.b("\n" + i);t.b("      <div class=\"btn-group\">");t.b("\n" + i);t.b("        <a href=\"#\" class=\"btn btn-default\">");t.b("\n" + i);t.b("          <i class=\"fa fa-2x fa-dashboard\"></i>Dashboard");t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("        <a href=\"starter-template.html\" class=\"btn btn-default active\">");t.b("\n" + i);t.b("          <i class=\"fa fa-2x fa-users\"></i>Contacts");t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("        <a href=\"az-picker.html\" class=\"btn btn-default\">");t.b("\n" + i);t.b("          <i class=\"fa fa-2x fa-font\"></i>AZ Picker");t.b("\n" + i);t.b("        </a>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n");t.b("\n" + i);t.b("  </div><!--footer-->");return t.fl(); },partials: {}, subs: {  }});
    templates['header'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">");t.b("\n" + i);t.b("    <div class=\"container\">");t.b("\n" + i);t.b("        <div class=\"navbar-header\">");t.b("\n" + i);t.b("            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("        <button type=\"button\" class=\"btn btn-default btn-back navbar-left pull-left hidden\" onclick=\"history.back()\"><i class=\"fa fa-lg fa-chevron-left\"></i><span>Back</span></button>");t.b("\n" + i);t.b("        <button type=\"button\" class=\"btn btn-default btn-menu navbar-left pull-left\" data-toggle=\"offcanvas\"><i class=\"fa fa-lg fa-bars\"></i><span>Menu</span></button><a class=\"navbar-brand\" title=\"Cobos CRM\" href=\"/\">Cobos</a>");t.b("\n" + i);t.b("        <div class=\"navbar-collapse collapse\">");t.b("\n" + i);t.b("            <ul class=\"nav navbar-nav\">");t.b("\n" + i);t.b("                <li class=\"active\"><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Dashboard </a></li>");t.b("\n" + i);t.b("                <li><a href=\"#\"><i class=\"fa fa-user\"></i> Contacts </a></li>");t.b("\n" + i);t.b("                <li><a href=\"#\"><i class=\"fa fa-calendar\"></i> Calendar </a></li>");t.b("\n" + i);t.b("                <li><a href=\"#\"><i class=\"fa fa-clipboard\"></i> Notes </a></li>");t.b("\n" + i);t.b("                <li><a href=\"#\"><i class=\"fa fa-gears\"></i> Settings </a></li>");t.b("\n" + i);t.b("            </ul>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
    templates['login'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<!-- ");t.b("\n" + i);t.b("  @author: modigie");t.b("\n" + i);t.b("  @description: Login UI");t.b("\n");t.b("\n" + i);t.b("  @required Data: username and password");t.b("\n" + i);t.b("  @optional Data: ");t.b("\n");t.b("\n" + i);t.b("  @Additional Info: ");t.b("\n" + i);t.b(" -->");t.b("\n");t.b("\n" + i);t.b(" <div class=\"js-login\">");t.b("\n" + i);t.b("    <div class=\"login-Wrapper\">");t.b("\n" + i);t.b("        <div class=\"login-status\">");t.b(t.v(t.f("LoginError",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("           ");t.b("\n" + i);t.b("        <form action=\"/\" class=\"login-form\" id=\"userLogin_Form\">");t.b("\n");t.b("\n" + i);t.b("            <fieldset class=\"inputs\">");t.b("\n" + i);t.b("                <input type=\"text\" placeholder=\"Username\" name=\"j_username\" required/>");t.b("\n" + i);t.b("                <span class=\"form-glyph icon-user\"></span>");t.b("\n" + i);t.b("            </fieldset>");t.b("\n");t.b("\n");t.b("\n" + i);t.b("            <fieldset class=\"inputs\">");t.b("\n" + i);t.b("                <input type=\"password\" placeholder=\"Password\" name=\"j_password\" required/>");t.b("\n" + i);t.b("                <span class=\"form-glyph icon-key\"></span>");t.b("\n" + i);t.b("            </fieldset>");t.b("\n");t.b("\n" + i);t.b("            <fieldset class=\"fieldset-gap\">");t.b("\n" + i);t.b("                <input type=\"submit\" class=\"btn\" id=\"Login_Btn\" value=\"Login\">");t.b("\n" + i);t.b("            </fieldset>");t.b("\n");t.b("\n" + i);t.b("        </form>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("</div>");t.b("\n" + i);t.b(" ");return t.fl(); },partials: {}, subs: {  }});
    templates['rich-text-sample'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b(" <!--rich text card sample-->");t.b("\n" + i);t.b("            <div class=\"panel panel-default bootcards-richtext\">");t.b("\n" + i);t.b("                <div class=\"panel-heading\">");t.b("\n" + i);t.b("                  <h3 class=\"panel-title\">Rich Text Card Heading</h3>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <div class=\"panel-body\">");t.b("\n" + i);t.b("                  <p class=\"lead\">Lead body copy vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>");t.b("\n" + i);t.b("                  <h1>Heading 1</h1>");t.b("\n" + i);t.b("                  <h2>Heading 2</h2>");t.b("\n" + i);t.b("                  <h3>Heading 3</h3>");t.b("\n" + i);t.b("                  <h4>Heading 4</h4>");t.b("\n" + i);t.b("                  <h5>Heading 5</h5>");t.b("\n" + i);t.b("                  <h6>Heading 6</h6>");t.b("\n" + i);t.b("                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis pretium nisl. Etiam at vestibulum purus, sit amet blandit mi. Duis enim lectus, tempus nec varius sed, sollicitudin quis velit. Fusce quis sem porttitor, euismod ante vitae, ultricies erat.</p>");t.b("\n" + i);t.b("                  <ul>");t.b("\n" + i);t.b("                    <li>Duis cursus dui et turpis gravida sollicitudin.</li>");t.b("\n" + i);t.b("                    <li>Donec eget mauris feugiat, euismod purus nec, feugiat neque.</li>");t.b("\n" + i);t.b("                    <li>Nunc erat est, molestie eget magna in, consectetur euismod lorem.</li>");t.b("\n" + i);t.b("                  </ul>");t.b("\n" + i);t.b("                  <ol>");t.b("\n" + i);t.b("                    <li>Sed luctus congue orci quis tempus.</li>");t.b("\n" + i);t.b("                    <li>Praesent in viverra lorem.</li>");t.b("\n" + i);t.b("                    <li>Suspendisse augue lacus, porta quis imperdiet at, posuere vel nulla.</li>");t.b("\n" + i);t.b("                  </ol>");t.b("\n" + i);t.b("                  <div>");t.b("\n" + i);t.b("                    <!-- Standard button -->");t.b("\n" + i);t.b("                    <button type=\"button\" class=\"btn btn-default\">Default</button>");t.b("\n" + i);t.b("                    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->");t.b("\n" + i);t.b("                    <button type=\"button\" class=\"btn btn-primary\">Primary</button>");t.b("\n" + i);t.b("                    <!-- Indicates a successful or positive action -->");t.b("\n" + i);t.b("                    <button type=\"button\" class=\"btn btn-success\">Success</button>");t.b("\n" + i);t.b("                    <!-- Contextual button for informational alert messages -->");t.b("\n" + i);t.b("                    <button type=\"button\" class=\"btn btn-info\">Info</button>");t.b("\n" + i);t.b("                    <!-- Indicates caution should be taken with this action -->");t.b("\n" + i);t.b("                    <button type=\"button\" class=\"btn btn-warning\">Warning</button>");t.b("\n" + i);t.b("                    <!-- Indicates a dangerous or potentially negative action -->");t.b("\n" + i);t.b("                    <button type=\"button\" class=\"btn btn-danger\">Danger</button>");t.b("\n" + i);t.b("                    <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->");t.b("\n" + i);t.b("                    <button type=\"button\" class=\"btn btn-link\">Link</button>");t.b("\n" + i);t.b("                    <button type=\"button\" class=\"btn btn-primary\" disabled=\"disabled\">Disabled</button>");t.b("\n" + i);t.b("                  </div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <div class=\"panel-footer\">");t.b("\n" + i);t.b("                  <small>Built with Bootcards - Rich Text Card</small>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("              </div><!--end rich text card-->");t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    return templates;
})