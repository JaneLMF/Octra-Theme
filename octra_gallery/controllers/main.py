import odoo
from odoo import http
from odoo import fields
from odoo.http import request



class octraCarouselgallery(http.Controller):      

    @http.route(['/gallery/catg/render'], type='json', auth='public', website=True , cache=300)
    def gallery_carousel_catg(self):
        values = {}
        portfolio_catg = request.env['portfolio.category'].sudo().search([])
                  
        if portfolio_catg:
            values['default_title'] = "All"
            values['title'] = portfolio_catg
        
        response = http.Response(template="octra_gallery.gallery_carousel_snippet_head", qcontext=values)
        return response.render()
    
    @http.route(['/gallery/data/render'], type='json', auth='public', website=True , cache=300)
    def gallery_carousel_data(self,id=None):
        if id:
            if id == 'all':
                portfolio_res = request.env['portfolio'].sudo().search([('is_website_published', '=',True)])
            else:
                portfolio_res = request.env['portfolio'].sudo().search([('is_website_published', '=',True),('portfolio_categ_id.id','=',int(id))])
        else:
            portfolio_res = request.env['portfolio'].sudo().search([('is_website_published', '=',True)])
            
        if portfolio_res:
            values={
                'portfolio':portfolio_res
            }
        
        response = http.Response(template="octra_gallery.gallery_carousel_snippet_data", qcontext=values)
        return response.render()
    
    @http.route(['/project_images'], type='json', auth="public", website=True)    
    def fetchImages(self,image_id=None, **kwargs):
        values = {}
        if image_id:
            image_record = request.env['portfolio'].sudo().browse(int(image_id))
            if image_record:
                values={'project_images':image_record,}
             
        response = http.Response(template="octra_gallery.octra_gallery_project_images",qcontext=values)            
        return response.render()
