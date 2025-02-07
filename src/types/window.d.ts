interface Window {
  daum: {
    Postcode: new (config: {
      oncomplete: (data: {
        zonecode: string;
        address: string;
        addressType: string;
        userSelectedType: string;
      }) => void;
    }) => {
      open: () => void;
    };
  };
}
