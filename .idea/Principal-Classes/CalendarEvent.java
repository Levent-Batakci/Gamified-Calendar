//Author: Levent Batakci
//This object organizes all of the information pertaining to an event

class CalendarEvent
{
    //int eventID; TO BE IMPLEMENTED LATER
    String eventName;
    EventTime eventTime;

    String eventDescription = "";

    public CalendarEvent(String name, UTime startTime, UTime endTime)
    {
        eventName = name;
        eventTime = new EventTime(startTime, endTime);
    }

    public CalendarEvent(String name, UTime startTime, UTime endTime, String desc)
    {
        eventDescription = desc;
        this(name, startTime, endTime);
    }

    public CalendarEvent(String name, EventTime time)
    {
        eventDescription = desc;
        eventTime = time;
    }

    public CalendarEvent(String name, EventTime time, String desc)
    {
        eventDescription = desc;
        this(name, time);
    }

    public String getEventName()
    {
        return  eventName;
    }

    public void setEventName(String name)
    {
        eventName = name;
    }

    public String getEventDescription() {
        return eventDescription;
    }

    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    //Returns true if the event is partially in the specified range
    public  boolean isInTimeRange(UTime start, UTime end)
    {
        return eventTime.partiallyInRange(start, end);
    }


}