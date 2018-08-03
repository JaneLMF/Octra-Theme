from odoo import http
from odoo.http import request
from odoo.tools.mail import html_sanitize
from odoo.addons.website.controllers.main import QueryURL

class octraLayout(http.Controller):
    
    @http.route('/menu_html_builder', type='http', auth="user", website=True)
    def menu_builder(self, model=False, id=False, **kw):
        if id and model:
            id = int(id)
            record = request.env[model].browse(id)
            values = {
                'record': record,
                'model': model,
                'id': id,
            }
            return request.render("octra_layout.website_menu_edit",values)
        return ("/")