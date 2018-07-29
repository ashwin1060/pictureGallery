import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{

    visibleImages = [];
    
    public getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    public getImage(id:number){
        return IMAGES.slice(0).find(image => image.id === id);
    }
}

const IMAGES = [
    {"id": 1, "category": "Page", "year": "2015", "caption": "Looking at Antelope", "url":"assets/img/IMG_1797.JPG"},
    {"id": 2, "category": "Diwali", "year": "2016", "caption": "Celebrating Diwali", "url":"assets/img/0YA01539.JPG"},
    {"id": 3, "category": "Diwali", "year": "2016", "caption": "Celebrating Diwali", "url":"assets/img/0YA01542.JPG"},
    {"id": 4, "category": "Flagstaff", "year": "2016", "caption": "Looking at canyons", "url":"assets/img/G0490192.JPG"},
    {"id": 5, "category": "Flagstaff", "year": "2016", "caption": "Enjoying Snow", "url":"assets/img/G0270093.JPG"},
    {"id": 6, "category": "Spartan", "year": "2017", "caption": "Testing Endurance", "url":"assets/img/DSC00778.JPG"},
    {"id": 7, "category": "Spartan", "year": "2017", "caption": "Testing Mental Strength", "url":"assets/img/DSC00691.JPG"},
    {"id": 8, "category": "Road Trip", "year": "2017", "caption": "Inside Caves", "url":"assets/img/DSC00166.JPG"},
    {"id": 9, "category": "Road Trip", "year": "2017", "caption": "Over White Sands", "url":"assets/img/DSC00270.JPG"},
    {"id": 10, "category": "Car", "year": "2017", "caption": "Epic Cars", "url":"assets/img/DSC_9037.jpg"},
    {"id": 11, "category": "Car", "year": "2017", "caption": "Epic Drive", "url":"assets/img/DSC_9246.jpg"},
    {"id": 12, "category": "Spartan", "year": "2018", "caption": "Testing The Limits", "url":"assets/8.jpeg"},
    {"id": 13, "category": "Spartan", "year": "2018", "caption": "Being Victorious", "url":"assets/img/9.jpeg"},
    {"id": 14, "category": "Scoville", "year": "2018", "caption": "Violently Hot Friends", "url":"assets/img/IMG_3390.jpg"},
    {"id": 15, "category": "Scoville", "year": "2018", "caption": "WORD.", "url":"assets/img/IMG_3340.jpg"}
]