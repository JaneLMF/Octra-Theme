from odoo import fields,models
from odoo.tools.translate import _

class SubMenuContent(models.Model):
    _inherit = 'website.menu'
    
    menu_html =fields.Html('Menu Html',sanitize=True)
    is_dynamic_menu = fields.Boolean("Dynamic menu",default=False)
    
    def action_edit_menu(self, context=None):
        if not len(self.ids) == 1:
            raise ValueError('One and only one ID allowed for this action')
        if not context.get('params'):
            action_id = self.pool['ir.model.data'].xmlid_to_res_id('website_odoo_ecommerce.odoo_ec_works_id')
        else:
            action_id = context['params']['action']

        url = '/menu_html_builder?model=website.menu&id=%d#' % (self.id)
        return {
            'name': _('Edit Template'),
            'type': 'ir.actions.act_url',
            'url': url,
            'target': 'self',
        }
