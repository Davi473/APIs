class Active
{
    constructor()
    {
        this.active;
        this.quantity;
        this.averagePrice;
        this.balance;
    }

    getActive()
    {
        return this.active;
    }

    setActive(active)
    {
        this.active = active;
    }

    getQuantity()
    {
        return this.quantity
    }

    setQuantity(quantity)
    {
        this.quantity = quantity
    }

    getAveragePrice()
    {
        return this.averagePrice
    }

    setAveragePrice(averagePrice)
    {
        this.averagePrice = averagePrice 
    }

    getBalance()
    {
        return this.balance
    }

    setBalance(balance)
    {
        this.balance = balance
    }
}
module.exports = Stocks;