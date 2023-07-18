export const formatQuantity = (quantity: number, isMonthly: boolean) => {
    return `$${quantity}/${isMonthly ? 'mo' : 'yr'}`;
};
