export interface InitialSellerStateType {
  sellerCategories: SellerCategoryType[] | null;
  sellerLoading: boolean;
  sellerError: InitialSellerErrorType | null;
  sellerMessage: string;
}

export interface InitialSellerErrorType {
  message?: string;
  code?: string;
}

export interface SellerCategoryType {
  category?: string;
  extraInfo?: string[];
  ticked?: boolean;
}
