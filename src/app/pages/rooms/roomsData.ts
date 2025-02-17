export interface RoomDataInterface {
    roomNumber: number;
    roomType: string;
    roomPrice: number;
    roomAmenities: string;
    roomCheckinTime: Date;
    roomCheckoutTime: Date;
}

export const roomData: Array<RoomDataInterface> = [
    {
        roomNumber: 101,
        roomType: "Deluxe",
        roomPrice: 4500,
        roomAmenities: "Free Wi-Fi, Complimentary Breakfast, AC, TV",
        roomCheckinTime: new Date("2024-11-24T12:00:00"),
        roomCheckoutTime: new Date("2024-11-25T11:00:00"),
    },
    {
        roomNumber: 102,
        roomType: "Super Deluxe",
        roomPrice: 6000,
        roomAmenities: "Free Wi-Fi, Complimentary Breakfast, AC, TV, Mini Fridge",
        roomCheckinTime: new Date("2024-11-24T14:00:00"),
        roomCheckoutTime: new Date("2024-11-25T12:00:00"),
    },
    {
        roomNumber: 103,
        roomType: "Suite",
        roomPrice: 9500,
        roomAmenities: "Free Wi-Fi, Complimentary Breakfast, AC, TV, Mini Fridge, Private Balcony",
        roomCheckinTime: new Date("2024-11-24T15:00:00"),
        roomCheckoutTime: new Date("2024-11-25T12:00:00"),
    },
    {
        roomNumber: 201,
        roomType: "Standard",
        roomPrice: 3000,
        roomAmenities: "Free Wi-Fi, AC, TV",
        roomCheckinTime: new Date("2024-11-24T11:00:00"),
        roomCheckoutTime: new Date("2024-11-25T10:00:00"),
    },
    {
        roomNumber: 202,
        roomType: "Economy",
        roomPrice: 2500,
        roomAmenities: "Free Wi-Fi, Fan, TV",
        roomCheckinTime: new Date("2024-11-24T10:00:00"),
        roomCheckoutTime: new Date("2024-11-25T09:00:00"),
    }
];