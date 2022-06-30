package com.google.sps.model;

import com.google.auto.value.AutoValue;
import java.util.List;

@AutoValue
public abstract class Trip {

    static Trip create(long tripID, String title, float totalBudget){
        return new AutoValue_Trip(tripID, title, totalBudget);
    }
    abstract long tripID();
    abstract String title();
    abstract List<Long> participants();
    abstract List<Long> eventIds;
    abstract float totalCost();
    abstract float totalBudget();
}

/*public long getParticipantAmmountOwed(long userId){
    //TODO: calculate participant ammount owed
}

public long getParticipantAmmountPaid(long userId){
    //TODO: calculate ammount paid  by a user
}*/