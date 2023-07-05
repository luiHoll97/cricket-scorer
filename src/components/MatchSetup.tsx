import { useState, ChangeEvent, FormEvent } from 'react';

import {
    Select,
    Input,
    FormControl,
    FormLabel,
    Button,
    Center,
    VStack
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


const HomeAwaySelect = ({
    label,
    options,
    onSelect,
}: {
    label: string;
    options: string[];
    onSelect: (value: string) => void;
}) => (
    <FormControl>
        <FormLabel>{label}</FormLabel>
        <Select
            placeholder={`Select ${label}`}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                onSelect(e.target.value)
            }
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </Select>
    </FormControl>
);

const FormatSelect = ({
    onSelect,
}: {
    onSelect: (value: string) => void;
}) => (
    <FormControl>
        <FormLabel>Format</FormLabel>
        <Select
            placeholder="Select Format"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => onSelect(e.target.value)}
        >
            <option value="One Day">One Day</option>
            <option value="T20">T20</option>
            <option value="Test">Test</option>
            <option value="First Class">First Class</option>
        </Select>
    </FormControl>
);

const FileUpload = ({
    label,
    onFileSelect,
  }: {
    label: string;
    onFileSelect: (file: File | null, dataURL: string | null) => void;
  }) => {
    const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataURL = event.target?.result as string | null;
          onFileSelect(file, dataURL);
        };
        reader.readAsDataURL(file);
      } else {
        onFileSelect(null, null);
      }
    };
  
    return (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Input type="file" onChange={handleFileSelect} />
      </FormControl>
    );
  };
  

const MatchSetup = () => {
    const [homeTeam, setHomeTeam] = useState('');
    const [awayTeam, setAwayTeam] = useState('');
    const [format, setFormat] = useState('');
    const [venue, setVenue] = useState('');
    const [date, setDate] = useState(new Date());
    const [homeTeamEmblemFile, setHomeTeamEmblemFile] = useState<File | null>(
        null
    );
    const [awayTeamEmblemFile, setAwayTeamEmblemFile] = useState<File | null>(
        null
    );

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Perform any necessary actions with the gathered data
        console.log('Form submitted:', {
            homeTeam,
            awayTeam,
            format,
            venue,
            date,
            homeTeamEmblemFile,
            awayTeamEmblemFile
        });
        if (homeTeamEmblemFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const homeTeamEmblemFileDataURL = event.target?.result as string;
              // Use the homeTeamEmblemFileDataURL as needed
              console.log('Home Team Emblem Data URL:', homeTeamEmblemFileDataURL);
            };
            reader.readAsDataURL(homeTeamEmblemFile);
          }
        
          if (awayTeamEmblemFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const awayTeamEmblemFileDataURL = event.target?.result as string;
              // Use the awayTeamEmblemFileDataURL as needed
              console.log('Away Team Emblem Data URL:', awayTeamEmblemFileDataURL);
            };
            reader.readAsDataURL(awayTeamEmblemFile);
          }
        };
        
        

    return (
        <form onSubmit={handleSubmit}>
            <Center>
            <VStack spacing={4}>
            <HomeAwaySelect
                label="Home Team"
                options={['Team A', 'Team B', 'Team C']}
                onSelect={setHomeTeam}
            />
            <HomeAwaySelect
                label="Away Team"
                options={['Team X', 'Team Y', 'Team Z']}
                onSelect={setAwayTeam}
            />
            
            <FormatSelect onSelect={setFormat} />
            </VStack>
            </Center>
            <Center>
            <VStack spacing={4}>
            <FormControl>
                <FormLabel>Venue</FormLabel>
                <Select
                    placeholder="Select Venue"
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        setVenue(e.target.value)
                    }
                >
                    <option value="Trent Bridge">Trent Bridge</option>
                    <option value="Edgbaston">Edgbaston</option>
                    <option value="Headingley">Headingley</option>
                    <option value="Lords">Lords</option>
                    <option value="The Wacca">The Wacca</option>
                    <option value="The Gaba">The Gaba</option>
                    <option value="Kia Oval">Kia Oval</option>
                    <option value="Old Trafford">Old Trafford</option>
                    <option value="MCG">MCG</option>
                    <option value="Ageas Bowl">Ageas Bowl</option>
                    <option value="Melbourne Cricket Ground">
                        Melbourne Cricket Ground
                    </option>
                </Select>
                
            </FormControl>
            </VStack>
            </Center>
            <Center>
            <VStack spacing={4}>
            <FormControl>
                
                
                <FormLabel>Date</FormLabel>
                <DatePicker
                    selected={date}
                    onChange={(newDate) => setDate(newDate as Date)}
                />
            </FormControl>
            <FileUpload
                label="Home Team Emblem"
                onFileSelect={setHomeTeamEmblemFile}
            />
            <FileUpload
                label="Away Team Emblem"
                onFileSelect={setAwayTeamEmblemFile}
            />
            <Button type="submit" mt={4} colorScheme="blue">
                Submit
            </Button>
            </VStack>
            </Center>
            
        </form>
        
    );
};

export default MatchSetup;
