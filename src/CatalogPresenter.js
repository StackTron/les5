import ProductCardView from "./ProductCardView";

export default class CatalogPresenter {
  constructor(catalogModel, cartModel) {
    this.catalogModel = catalogModel;
    this.cartModel = cartModel;
    this.container = document.querySelector('.showcase')
    this.cards = [];

    this.catalogModel.subscribe('onSet', (catalog) => {
      this.cards = catalog.map((product) => new ProductCardView(product))
      this.cards.forEach((card) => card.render(this.container))
    })
  }

  

  init() {
    this.catalogModel.init()
    this.cartModel.init()
  }
}