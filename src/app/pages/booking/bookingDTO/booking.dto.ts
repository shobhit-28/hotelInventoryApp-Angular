export interface BookingInterface {
    bookingld: string;
    roomld: string;
    guestEmai1: string;
    checkinDate: Date;
    checkoutDate: Date;
    bookingStatus: string;
    bookinAmount: number;
    bookingDate: Date;
    mobileNumber: string;
    guestName: string;
    guestAddress: string;
    guestCity: string;
    guestState: string;
    guestCoungcy: string;
    guestZipCode: string;
    guestCount: number;
    guestList: Array<any>
}