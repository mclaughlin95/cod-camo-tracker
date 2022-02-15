
angular.module('camo', []).controller('TrackerController', function() {
    let tracker = this;
    
    tracker.items = [];

    tracker.CreateModel = {
        title: '',
        start: 0,
        end: 250
    };

    tracker.create = (title, min, max) => {
        if (
            (title.trim().length > 0) && 
            (min >= 0 && min <= max) && 
            (max > 0 && max >= min)
        ) {
            tracker.items.push({
                title: tracker.CreateModel.title,
                start: tracker.CreateModel.start,
                end: tracker.CreateModel.end
            });
        }
    };

    tracker.progress = (start, end) => {
        let percent  = (start / end) * 100;
        return Number(percent.toFixed(2));
    };

    tracker.delete = (i) => {
        console.log(i);
        tracker.items.splice(i,1);
    };
    
});