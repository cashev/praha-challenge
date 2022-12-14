interface Purchase {
    userId: string
    productId: string
    transaction: {
        succeeded: true
        completedAt: Date
    }
}

interface PaymentRecordRepo {
    getPurchasesBy: (userId: string) => Purchase[]
}

interface PurchaseRule {
    validate: (userId: string, productId: string) => [ok: boolean, msg: string]
}

interface PurchaseRuleRepo {
    getPurchaseRuleBy: (productId: string) => PurchaseRule
}

class PurchaseOnlyOnce implements PurchaseRule {
    public constructor(
        private paymentRecordRepo: PaymentRecordRepo
    ){}

    validate(userId: string, productId: string): [ok: boolean, msg: string] {
        const allPurchases = this.paymentRecordRepo.getPurchasesBy(userId)
        const pastPurchase = allPurchases.find((p) => p.productId === productId && p.transaction.succeeded)
        if (pastPurchase) {
            return [false, 'この商品はおひとりさま一品限定です！']
        }
        return [true, '']
    }
}

class PurchaseService {
    public constructor(
        private userId: string, 
        private productId: string,
        private purchaseRuleRepo: PurchaseRuleRepo
    ) {}

    public purchase() {
        this.validate();

        // 購入手続きに進む
    }

    private validate() {
        const purchaseRule = this.purchaseRuleRepo.getPurchaseRuleBy(this.productId)
        const [ok, msg] = purchaseRule.validate(this.userId, this.productId)
        if (!ok) {
            throw new Error(msg)
        }
    }
}