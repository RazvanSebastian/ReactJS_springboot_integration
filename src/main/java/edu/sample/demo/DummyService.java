package edu.sample.demo;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class DummyService {

    public List<Dummy> getDummies(){
        return Arrays.asList(
                new Dummy("Razvan", 24),
                new Dummy("Sebastian", 30)
        );
    }
}
