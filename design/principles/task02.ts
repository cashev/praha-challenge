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
    validate: () => [ok: boolean, msg: string]
}

class PurchaseOnlyOnce implements PurchaseRule {
    public constructor(
        private userId: string,
        private productId: string,
        private paymentRecordRepo: PaymentRecordRepo
    ){}

    validate(): [ok: boolean, msg: string] {
        const allPurchases = this.paymentRecordRepo.getPurchasesBy(this.userId)
        const pastPurchase = allPurchases.find((p) => p.productId === this.productId && p.transaction.succeeded)
        if (pastPurchase) {
            return [false, 'この商品はおひとりさま一品限定です！']
        }
        return [true, '']
    }
}

class PurchaseService {
    public constructor(
        private PurchaseRule: PurchaseRule
    ) {}

    public purchase() {
        this.validate();

        // 購入手続きに進む
    }

    private validate() {
        const [ok, msg] = this.PurchaseRule.validate()
        if (!ok) {
            throw new Error(msg)
        }
    }
}