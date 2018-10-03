//1% of current funds, per cycle.
allowancePercentage = 0.01;
while (true) {
    currentCash = getServerMoneyAvailable('home');
    currentCash *= allowancePercentage;
    if (hacknet.getPurchaseNodeCost() <= currentCash) {
        hacknet.purchaseNode();
    } else {
        for (i = 0; i < hacknet.numNodes; i++) {
            node = hacknetnodes[i];
            upgradeCost = hacknet.getLevelUpgradeCost(1);
            if (upgradeCost <= currentCash) {
                hacknet.upgradeLevel(1);
                break;
            } else {
                ramCost = hacknet.getRamUpgradeCost();
                if (ramCost <= currentCash) {
                    hacknet.upgradeRam();
                    break;
                } else {
                    coreCost = hacknet.getCoreUpgradeCost();
                    if (coreCost <= currentCash) {
                        hacknet.upgradeCore();
                        break;
                    }
                }
            }
        }
    }
}
